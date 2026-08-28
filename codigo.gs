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
  version: '3.2.0',
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
  return {
    ...SAE_EDITION,
    contact: {
      enabled: true,
      whatsappUrl: 'https://wa.me/5534991201015',
    },
  };
}
