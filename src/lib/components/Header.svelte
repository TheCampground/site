<script lang="ts">
    import Button from "@core/components/Button.svelte"
    import Campground from "@core/assets/favicon.png"
</script>

<header class="sticky top-4 border border-on-surface/10 card flex items-center justify-between gap-2 h-12 pl-4 pr-2.5 flex-self-stretch rounded-xl bg-container-low/70 backdrop-blur-xs text-on-surface flex-grow w-full shadow-lg z-[999]">
    <div class="flex items-center gap-6">
        <Button href="/" element="#root" variant="link">
            <img src={Campground} alt="Campground" class="h-5 w-auto select-none pointer-events-none" draggable="false" />
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
