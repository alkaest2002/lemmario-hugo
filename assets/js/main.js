import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import Htmx from 'htmx.org'
window.Htmx = Htmx
window.Alpine = Alpine
Alpine.plugin(persist)
Alpine.store('lemmario', { "orderBy": Alpine.$persist("time") });
Alpine.start()