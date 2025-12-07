<script lang="ts">
    import { Icon, type IconSource } from "@steeze-ui/svelte-icon"
    import { GithubLogo, Tipi } from "@steeze-ui/phosphor-icons"
    import type { ProjectCardProps } from "@core/types"
    import { langColors } from "@core/utils"
    import { Campground } from "@core/icons"
    import { Button } from "ui"

    const { name, description, image, lang, langs, extra = [], link }: ProjectCardProps = $props()
</script>

<div class="card flex flex-col gap-3 p-4 flex-self-stretch rounded-xl bg-container-low text-on-surface flex-grow w-full border">
    <div class="inline-flex gap-3 items-center text-on-surface text-sm">
        {#if image && typeof image === "string"}
            <img src={image} alt="Tent with white outlines" class="size-6 rounded-full pointer-events-none select-none" draggable="false" />
        {:else}
            <Icon src={(image as IconSource) || Campground} class="h-6 w-auto select-none pointer-events-none" />
        {/if}
        <p class="font-bold">{name}</p>
    </div>
    <div class="flex flex-col w-full">
        <p class="text-sm">{description}</p>
    </div>
    <div class="flex gap-1 items-center flex-wrap flex-1">
        {#if lang}
            {@const color = langColors[lang as string] ?? "var(--primary)"}
            {@render tag(color, lang)}
        {/if}
        {#if langs}
            {#each langs as lang}
                {@const color = langColors[lang as string] ?? "var(--primary)"}
                {#if lang}
                    {@render tag(color, lang)}
                {/if}
            {/each}
        {/if}
        {#each extra as item}
            {@render tag(item.icon, item.value)}
        {/each}
    </div>
    <div class="flex items-center w-full justify-between">
        <div class="flex items-center gap-2 text-on-surface-alt select-none">
            <Icon src={Tipi} theme="fill" class="size-4" />
            <p class="text-xs">Built on the Campground</p>
        </div>
        {@render projectLink()}
    </div>
</div>

{#snippet tag(icon: IconSource | string, value: string | number)}
    <div class="px-1.5 inline-flex items-center gap-1.5 py-[3px] bg-badge/40 border border-badge/70 rounded-lg text-on-surface-alt select-none">
        {#if typeof icon === "string"}
            <span class="size-2.5 rounded-full" style="background-color: {icon}"></span>
        {:else}
            <Icon src={icon} theme="fill" class="size-3.5" />
        {/if}
        <span class="text-[0.7rem] font-medium">{value}</span>
    </div>
{/snippet}

{#snippet projectLink()}
    {#if link}
        {@const url = link.type === "github" ? `https://github.com/TheCampground/${link.repo}` : link.url}
        <Button href={url} size="small" variant="primary" class="flex items-center gap-1 text-xs">
            {#if link.type === "github"}
                <Icon src={GithubLogo} theme="bold" class="size-4" />
                GitHub
            {:else}
                {#if link.icon}
                    <Icon src={link.icon} theme="bold" class="size-4" />
                {/if}
                {link.text}
            {/if}
        </Button>
    {/if}
{/snippet}
