<script lang="ts">
    import "@fontsource-variable/space-grotesk"
    import "../app.css"

    import Background from "@core/components/Background.svelte"
    import Header from "@core/components/Header.svelte"
    import Footer from "@core/components/Footer.svelte"
    import { ModeWatcher } from "mode-watcher"

    let { children } = $props()
</script>

<Background />
<ModeWatcher />

<div
    class="p-4 flex flex-col items-center justify-center w-full lg:h-full my-0 md:my-5"
>
    <div
        class="flex flex-col gap-6 items-center justify-center max-w-[750px] w-full"
    >
        <Header />
        {@render children?.()}
        <Footer />
    </div>
</div>
