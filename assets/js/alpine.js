document.addEventListener('alpine:init', () => {
  Alpine.store('lemmario', { "orderBy": Alpine.$persist("time") });
});

  