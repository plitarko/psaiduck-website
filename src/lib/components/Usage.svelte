<script>
  const defaultActions = [
    {
      name: 'Explain Selected Text',
      hotkey: '⌥⇧E',
      description: 'Select any text and press the hotkey to get an AI explanation.'
    },
    {
      name: 'Explain Screen Region',
      hotkey: '⌥⇧S',
      description: 'Capture a screen region and extract text for analysis.'
    },
    {
      name: 'Translate to English',
      hotkey: '⌥⇧T',
      description: 'Translate selected text to English instantly.'
    }
  ];

  const tips = [
    'Use the menu bar icon to quickly access all your actions',
    'Create custom actions for tasks you perform frequently',
    'Ask follow-up questions to dive deeper into explanations',
    'The app launches at login by default for quick access'
  ];
</script>

<section id="usage">
  <div class="section-container">
    <h2 class="section-title">How to Use</h2>
    <p class="section-subtitle">
      Master Psaiduck with these default actions and tips.
    </p>

    <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <!-- Default Actions -->
      <div>
        <h3 class="text-2xl font-semibold mb-6 flex items-center gap-3">
          <svg class="w-6 h-6 text-psaiduck-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Default Actions
        </h3>

        <div class="space-y-4">
          {#each defaultActions as action}
            <div class="bg-psaiduck-dark-lighter rounded-xl p-5">
              <div class="flex justify-between items-start mb-2">
                <h4 class="font-semibold">{action.name}</h4>
                <span class="bg-psaiduck-dark px-3 py-1 rounded-lg text-sm font-mono text-psaiduck-purple-light">
                  {action.hotkey}
                </span>
              </div>
              <p class="text-gray-400 text-sm">{action.description}</p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Tips -->
      <div>
        <h3 class="text-2xl font-semibold mb-6 flex items-center gap-3">
          <svg class="w-6 h-6 text-psaiduck-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Pro Tips
        </h3>

        <div class="space-y-4">
          {#each tips as tip}
            <div class="flex gap-3 items-start">
              <svg class="w-5 h-5 text-psaiduck-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-gray-300">{tip}</p>
            </div>
          {/each}
        </div>

        <!-- Custom Actions -->
        <div class="mt-8 p-5 bg-psaiduck-dark-lighter rounded-xl">
          <h4 class="font-semibold mb-3">Create Custom Actions</h4>
          <p class="text-gray-400 text-sm mb-4">
            Click "Manage Actions" in the menu to create your own actions with custom prompts and hotkeys. Perfect for:
          </p>
          <ul class="text-sm text-gray-400 space-y-2">
            <li class="flex gap-2">
              <span class="text-psaiduck-purple">•</span>
              Code explanations and reviews
            </li>
            <li class="flex gap-2">
              <span class="text-psaiduck-purple">•</span>
              Language translations
            </li>
            <li class="flex gap-2">
              <span class="text-psaiduck-purple">•</span>
              Summarizing long articles
            </li>
            <li class="flex gap-2">
              <span class="text-psaiduck-purple">•</span>
              Grammar and writing improvements
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
