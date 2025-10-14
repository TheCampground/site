<script lang="ts">
    import { Icon, type IconSource } from "@steeze-ui/svelte-icon"
    import type { Snippet } from "svelte"

    type ChipProps = {
        icon?: IconSource
        children: Snippet
    }

    let { icon, children }: ChipProps = $props()
</script>

<div class="px-3 inline-flex text-xs items-center gap-2 py-2.5 bg-secondary-container rounded-lg text-on-secondary-container">
    {#if icon}
        <Icon src={icon} theme="fill" class="size-4" />
    {/if}
    {@render children?.()}
</div>
