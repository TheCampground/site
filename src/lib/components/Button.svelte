<script lang="ts">
    import { goto } from "$app/navigation"
    import type { Snippet } from "svelte"
    import { page } from "$app/state"
    import { cn } from "@core/utils"

    type ButtonProps = {
        children?: Snippet
        element?: string
        href: string
        variant?: "default" | "cta" | "link"
        class?: string
    }

    let { class: className = "", element, href, children, variant = "default" }: ButtonProps = $props()

    function handleClick() {
        if (element && href === page.url.pathname) {
            let elem = document.querySelector(element)
            elem ? elem?.scrollIntoView({ behavior: "smooth" }) : goto(href)
        } else {
            goto(href)
        }
    }

    let defaultStyles = "cursor-pointer transition-all text-sm"

    let variants = {
        "default": "text-xs px-2 py-1.5 bg-on-surface-alt hover:bg-on-surface-alt/90 font-semibold rounded-lg text-container-low",
        "cta": "text-xs px-2 py-1.5 bg-on-secondary-container hover:bg-on-secondary-container/90 font-semibold rounded-lg text-container-low",
        "link": "text-on-surface inline-flex items-center font-[500] justify-center gap-1.5 cursor-pointer hover:text-on-surface-alt",
    }
</script>

<button onclick={handleClick} class={cn(defaultStyles, variants[variant], className)}>
    {@render children?.()}
</button>
