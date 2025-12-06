<script lang="ts">
    import {
        UsersThree,
        GithubLogo,
        HandWaving,
    } from "@steeze-ui/phosphor-icons";
    import Marshmallow from "@core/assets/Marshmallow.png";
    import TheCampsite from "@core/assets/TheCampsite.png";
    import Project from "@core/components/Project.svelte";
    import Button from "@core/components/Button.svelte";
    import Campground from "@core/assets/favicon.png";
    import Card from "@core/components/Card.svelte";
    import Bonfire from "@core/assets/bonfire.png";
    import { Icon } from "@steeze-ui/svelte-icon";
</script>

<main id="home" class="flex content-center w-full">
    <Card
        name="About"
        header="Hey! We are Campground."
        description="Campground is an independent collective where creativity meets code and design. We're a small group passionate about developing open-source tools, experimenting with new tech, and growing projects under one shared identity. Whether it's a new app, community, or a weekend experiment, every project developed at Campground is fueled by curiosity, collaboration, and s'mores."
    >
        <Button
            href="https://github.com/TheCampground"
            variant="default"
            class="flex items-center gap-1 p-2"
        >
            <Icon src={GithubLogo} theme="bold" class="size-4" />
            GitHub
        </Button>
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
            extra={[{ icon: UsersThree, value: 23 }]}
            link={{
                type: "url",
                text: "Join Us!",
                icon: HandWaving,
                url: "/join",
            }}
        />
        <div class="w-full flex flex-wrap md:flex-nowrap gap-2">
            <Project
                name="ui"
                description="The UI library for Campground projects"
                image={Campground}
                lang="Svelte"
                link={{ type: "github", repo: "ui" }}
            />
            <Project
                name="ui-compose"
                description="The UI library for Campground Compose Multiplatform projects"
                image={Campground}
                lang="Kotlin"
                link={{ type: "github", repo: "ui-compose" }}
            />
        </div>
        <!-- If / when Shuttle is recreated to match the theme -->
        <!-- <Project
            name="Bonfire"
            description="A cute, fun and easy to use ShareS replacement."
            image={Bonfire}
            langs={["Kotlin", "Svelte", "TypeScript"]}
        /> -->
        <Project
            name="Marshmallow"
            description="The helper bot for The Campsite Discord community"
            image={Marshmallow}
            lang="TypeScript"
        />
        <Project
            name="Campground Theme"
            description="A custom Discord / Vencord theme to match the aesthetic of Campground (WIP)"
            image={Campground}
            lang="CSS"
            link={{ type: "github", repo: "campground-theme" }}
        />
    </div>
</div>
