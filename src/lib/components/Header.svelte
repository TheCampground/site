<script lang="ts">
    import Button from "@core/components/Button.svelte"
    import { Tipi } from "@steeze-ui/phosphor-icons"
    import { Icon } from "@steeze-ui/svelte-icon"
</script>

<header class="sticky top-4 border border-on-surface/10 card flex items-center justify-between gap-2 h-12 pl-4 pr-2.5 flex-self-stretch rounded-xl bg-container-low/70 backdrop-blur-xs text-on-surface flex-grow w-full shadow-lg z-[999]">
    <div class="flex items-center gap-6">
        <Button href="/" element="#root" variant="link">
            <Icon src={Tipi} theme="fill" class="size-6" />
        </Button>
        <Button href="/" element="#projects" variant="link">
            Projects
        </Button>
    </div>
    <div class="flex items-center gap-2">
        <Button href="/join" variant="cta">
            Join Us
        </Button>
    </div>
</header>
