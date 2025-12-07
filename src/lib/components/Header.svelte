<script lang="ts">
    import { Moon, Sun } from "@steeze-ui/phosphor-icons"
    import { mode, toggleMode } from "mode-watcher"
    import { Icon } from "@steeze-ui/svelte-icon"
    import { Campground } from "@core/icons"
    import { Button } from "ui"
</script>

<header class="sticky top-4 border border-on-surface card flex items-center justify-between gap-2 h-14 px-2.5 flex-self-stretch rounded-xl bg-card/60 backdrop-blur-xs text-on-surface flex-grow w-full shadow-lg z-[999]">
    <div class="flex items-center">
        <Button href="/" variant="link">
            <Icon src={Campground} class="h-5 w-auto select-none pointer-events-none" />
        </Button>
        <Button href="#projects" variant="link">
            Projects
        </Button>
    </div>
    <div class="flex items-center gap-2">
        <Button variant="ghost" size="icon" onclick={toggleMode}>
            <Icon src={mode.current === "dark" ? Sun : Moon} theme="bold" class="min-w-5 min-h-5 max-w-5 max-h-5 pointer-events-none group-hover:text-primary transition-all" />
        </Button>
        <Button href="/join" variant="primary">
            Join Us
        </Button>
    </div>
</header>
