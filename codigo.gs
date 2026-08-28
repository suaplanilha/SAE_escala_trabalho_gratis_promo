/**
 * SAE Controle de Escala — Edição Gratuita
 * Backend mínimo para Google Apps Script.
 *
 * Os dados operacionais permanecem no localStorage do navegador.
 * Esta edição não lê nem grava dados em Google Sheets.
 */

const SAE_EDITION = Object.freeze({
  product: 'SAE Controle de Escala',
  edition: 'free',
  version: '3.0.0',
  storage: 'local',
  features: {
    localSchedule: true,
    csvExport: true,
    jsonBackup: true,
    sheetsSync: false,
    sharedAccess: false,
    professionalPdf: false,
    auditHistory: false,
    customBranding: false,
  },
});

function doGet() {
  const template = HtmlService.createTemplateFromFile('index');
  template.runtimeConfig = JSON.stringify(getRuntimeConfig());

  return template
    .evaluate()
    .setTitle('SAE Controle de Escala — Edição Gratuita')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getRuntimeConfig() {
  const properties = PropertiesService.getScriptProperties();
  return {
    ...SAE_EDITION,
    contact: {
      enabled: Boolean(properties.getProperty('SAE_CONTACT_EMAIL')),
      whatsappUrl: sanitizePublicUrl_(properties.getProperty('SAE_CONTACT_WHATSAPP_URL')),
    },
  };
}

/**
 * Recebe uma manifestação de interesse e a encaminha ao e-mail configurado.
 * Não cria banco de dados nem armazena dados do usuário.
 */
function submitInterest(payload) {
  const request = validateInterest_(payload);
  const recipient = PropertiesService.getScriptProperties().getProperty('SAE_CONTACT_EMAIL');

  if (!recipient) {
    return {
      ok: false,
      code: 'CONTACT_NOT_CONFIGURED',
      message: 'O canal comercial ainda não foi configurado pelo responsável desta cópia.',
    };
  }

  const subject = `[SAE] Interesse na versão ${request.edition}`;
  const body = [
    'Nova manifestação de interesse pelo SAE Controle de Escala.',
    '',
    `Nome: ${request.name}`,
    `Contato: ${request.contact}`,
    `Versão de interesse: ${request.edition}`,
    `Necessidade: ${request.message || 'Não informada'}`,
    '',
    `Recebido em: ${new Date().toISOString()}`,
  ].join('\n');

  const mailOptions = { to: recipient, subject, body };
  if (isValidEmail_(request.contact)) mailOptions.replyTo = request.contact;
  MailApp.sendEmail(mailOptions);
  return { ok: true, message: 'Solicitação enviada à equipe SAE.' };
}

/**
 * Execute uma vez no editor do Apps Script para configurar o contato comercial.
 * Exemplo:
 * configureSaeContact('contato@empresa.com', 'https://wa.me/5511999999999');
 */
function configureSaeContact(email, whatsappUrl) {
  if (!isValidEmail_(email)) throw new Error('Informe um e-mail válido.');
  const properties = PropertiesService.getScriptProperties();
  properties.setProperty('SAE_CONTACT_EMAIL', String(email).trim());
  if (whatsappUrl) properties.setProperty('SAE_CONTACT_WHATSAPP_URL', sanitizePublicUrl_(whatsappUrl));
  else properties.deleteProperty('SAE_CONTACT_WHATSAPP_URL');
  return { ok: true };
}

function validateInterest_(payload) {
  if (!payload || typeof payload !== 'object') throw new Error('Solicitação inválida.');
  const name = cleanText_(payload.name, 100);
  const contact = cleanText_(payload.contact, 160);
  const message = cleanText_(payload.message, 1000);
  const edition = ['Completa', 'Customizada'].includes(payload.edition) ? payload.edition : 'Completa';
  if (name.length < 2) throw new Error('Informe seu nome.');
  if (contact.length < 5) throw new Error('Informe um e-mail ou telefone para retorno.');
  return { name, contact, message, edition };
}

function cleanText_(value, maxLength) {
  return String(value || '').replace(/[<>]/g, '').trim().slice(0, maxLength);
}

function isValidEmail_(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function sanitizePublicUrl_(value) {
  const url = String(value || '').trim();
  return /^https:\/\//i.test(url) ? url : '';
}
