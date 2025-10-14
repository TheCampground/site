<script lang="ts">
    import Banner from "@core/assets/Banner-Gradient.svg"

    let { name, header, description, children } = $props()
</script>

<div class="card flex flex-col gap-4 pb-6 h-fit rounded-xl bg-container-low text-on-surface min-w-[40%] w-fit shadow-lg">
    <img
        src={Banner}
        class="rounded-t-lg [mask-image:linear-gradient(to_top,transparent,black)] [mask-size:100%_100%] [mask-repeat:no-repeat] select-none pointer-events-none"
        alt="Vector forest scene with white-outline tent in the center."
        draggable="false"
    />

    <div class="text-primary px-6 font-medium text-sm">
        {name}
    </div>

    <div class="text-on-surface px-6 text-3xl font-bold">
        {header}
    </div>
    <div class="px-6">
        {description}
    </div>

    <div class="inline-flex w-full px-6 gap-2 items-center flex-wrap">
        {@render children?.()}
    </div>
</div>
