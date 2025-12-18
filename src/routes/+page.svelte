<script>
  import { onMount } from 'svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Features.svelte';
  import Screenshots from '$lib/components/Screenshots.svelte';
  import Installation from '$lib/components/Installation.svelte';
  import Usage from '$lib/components/Usage.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let version = '2.3';
  let downloadUrl = 'https://raw.githubusercontent.com/plitarko/psaiduck-updates/main/Psaiduck-v2.3.zip';

  onMount(async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/plitarko/psaiduck-updates/main/appcast.xml');
      const text = await response.text();

      // Parse version
      const versionMatch = text.match(/<sparkle:shortVersionString>([^<]+)<\/sparkle:shortVersionString>/);
      if (versionMatch) {
        version = versionMatch[1];
      }

      // Parse download URL
      const urlMatch = text.match(/url="([^"]+Psaiduck[^"]+\.zip)"/);
      if (urlMatch) {
        downloadUrl = urlMatch[1];
      }
    } catch (error) {
      console.error('Failed to fetch version info:', error);
    }
  });
</script>

<svelte:head>
  <title>Psaiduck - AI-Powered Text Explanation for macOS</title>
  <meta name="description" content="A lightweight macOS menu bar app that explains selected text or screen regions using AI. Custom actions, beautiful markdown, and more." />
  <meta property="og:title" content="Psaiduck - AI-Powered Text Explanation for macOS" />
  <meta property="og:description" content="A lightweight macOS menu bar app that explains selected text or screen regions using AI." />
  <meta property="og:image" content="/app-icon.png" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main>
  <Hero {version} {downloadUrl} />
  <Features />
  <Screenshots />
  <Installation {downloadUrl} />
  <Usage />
  <Footer {version} />
</main>
