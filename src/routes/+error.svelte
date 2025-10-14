<script lang="ts">
    import Button from "@core/components/Button.svelte"
    import { page } from "$app/state"
</script>

<div class="flex flex-col gap-6 flex-1 flex-grow text-on-surface p-4 justify-center items-center text-center rounded-xl border border-on-surface/10 bg-container-low/50 backdrop-blur-xs shadow-lg w-full">
    <div class="flex flex-col">
        <h1 class="text-2xl font-bold">Something went wrong</h1>
        <p class="text-sm text-on-surface/60">{page.status} {page.error?.message}</p>
    </div>
    <Button href="/" class="w-fit">Return Home</Button>
</div>
