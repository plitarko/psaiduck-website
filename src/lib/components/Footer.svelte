<script>
  export let version = '2.3';

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-psaiduck-dark-lighter/50 border-t border-gray-800">
  <div class="section-container py-12">
    <div class="flex justify-center">
      <!-- Logo & Info -->
      <div class="flex items-center gap-4">
        <img src="/app-icon.png" alt="Psaiduck" class="w-10 h-10 rounded-lg" />
        <div>
          <h3 class="font-semibold">Psaiduck</h3>
          <p class="text-sm text-gray-400">Version {version}</p>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
      <p>&copy; {currentYear} Psaiduck. Built with AI.</p>
    </div>
  </div>
</footer>
