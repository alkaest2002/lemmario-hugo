import Alpine from 'alpinejs'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'
window.Alpine = Alpine
Alpine.plugin(persist)
Alpine.plugin(morph) 
Alpine.store('lemmario', { "orderBy": Alpine.$persist("time") });
Alpine.start()