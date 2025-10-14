<script lang="ts">
    import { Star, Users, UsersThree } from "@steeze-ui/phosphor-icons"
    import Marshmallow from "@core/assets/Marshmallow.png"
    import TheCampsite from "@core/assets/TheCampsite.png"
    import Project from "@core/components/Project.svelte"
    import Card from "@core/components/Card.svelte"
    import Chip from "@core/components/Chip.svelte"
</script>

<main id="home" class="flex content-center w-full">
    <Card
        name="About"
        header="Hey! We are Campground."
        description="Campground is an independent collective where creativity meets code and design. We're a small group passionate about developing open-source tools, experimenting with new tech, and growing projects under one shared identity. Whether it's a new app, community, or a weekend experiment, every project developed at Campground is fueled by curiosity, collaboration, and s'mores."
    >
        <Chip icon={Users}>
            2
        </Chip>
    </Card>
</main>

<div class="flex flex-col items-center gap-2 w-full">
    <div class="inline-flex items-start w-full">
        <h2 class="text-on-surface-alt font-bold">Campground Projects</h2>
    </div>
    <div id="projects" class="flex flex-wrap gap-3 max-w-[750px] w-full">
        <Project
            name="The Campsite"
            description="An ever-growing community on Discord that aims to provide a warm welcome to all new members joining us!"
            image={TheCampsite}
            extra={[{ icon: UsersThree, value: 300 }]}
        />
        <Project
            name="Bonfire"
            description="A cute, fun and easy to use ShareS replacement."
            lang="Kotlin"
            extra={[{ icon: Star, value: 14 }]}
        />
        <Project
            name="Marshmallow"
            description="An open-source Discord bot written in TypeScript for The Campsite community"
            image={Marshmallow}
            lang="TypeScript"
            extra={[{ icon: Star, value: 14 }]}
        />
    </div>
</div>
