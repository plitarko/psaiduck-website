<script>
  export let downloadUrl = '';

  const steps = [
    {
      number: '1',
      title: 'Download',
      description: 'Download the latest version of Psaiduck from the link above.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>`
    },
    {
      number: '2',
      title: 'Install',
      description: 'Unzip and drag Psaiduck to your Applications folder.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>`
    },
    {
      number: '3',
      title: 'Grant Permissions',
      description: 'Open the app and grant Accessibility permissions when prompted. When you first use an action, macOS will ask to allow pasting from Psaiduck — click "Always Allow" to enable this.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`
    },
    {
      number: '4',
      title: 'Set API Key',
      description: 'Click on "Set API Key" in the menu and enter your OpenAI API key.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>`
    }
  ];
</script>

<section id="installation" class="bg-psaiduck-dark-lighter/50">
  <div class="section-container">
    <h2 class="section-title">Getting Started</h2>
    <p class="section-subtitle">
      Get up and running in just a few simple steps.
    </p>

    <div class="max-w-3xl mx-auto">
      <div class="space-y-6">
        {#each steps as step, i}
          <div class="flex gap-6 items-start">
            <!-- Step number -->
            <div class="flex-shrink-0 w-12 h-12 bg-psaiduck-purple rounded-full flex items-center justify-center font-bold text-lg">
              {step.number}
            </div>

            <!-- Content -->
            <div class="flex-1 bg-psaiduck-dark rounded-xl p-6">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-psaiduck-purple">
                  {@html step.icon}
                </span>
                <h3 class="text-xl font-semibold">{step.title}</h3>
              </div>
              <p class="text-gray-400">{step.description}</p>
            </div>
          </div>

          <!-- Connector line -->
          {#if i < steps.length - 1}
            <div class="ml-6 w-px h-6 bg-psaiduck-purple/30"></div>
          {/if}
        {/each}
      </div>

      <!-- API Key Note -->
      <div class="mt-12 p-6 bg-psaiduck-dark rounded-xl border border-psaiduck-purple/30">
        <h4 class="font-semibold mb-2 flex items-center gap-2">
          <svg class="w-5 h-5 text-psaiduck-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          About API Keys
        </h4>
        <p class="text-gray-400 text-sm">
          Psaiduck requires an OpenAI API key to function. Your API key is stored securely in your macOS Keychain and is only used to communicate with the OpenAI API. Get your API key at
          <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener" class="text-psaiduck-purple hover:underline">platform.openai.com</a>.
        </p>
      </div>
    </div>
  </div>
</section>
