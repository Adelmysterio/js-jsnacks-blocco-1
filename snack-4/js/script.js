/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa. */

const invitati = ['Adelmo', 'Marcello', 'Claudio', 'Francesco', 'Gabriel', 'Rocco']

const nomeUtente = prompt('Scrivi il tuo nome')

if (invitati.includes(nomeUtente)) {
    console.log ('Puoi entrare')
}