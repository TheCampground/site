import type { IconSource } from "@steeze-ui/svelte-icon"
import { langColors } from "@core/utils"

interface ProjectCardExtraItem {
    icon: IconSource
    value: string | number
}

type ProjectCardLinkGithub = {
    type: "github"
    icon?: never
    repo: string
    url?: never
    text?: never
}
type ProjectCardLinkUrl = {
    type: "url"
    icon?: IconSource
    url: string
    text: string
    repo?: never
}

type ProjectCardSingleLang = {
    name: string
    description: string
    image?: string | IconSource
    lang?: string
    extra?: Array<ProjectCardExtraItem>
    link?: ProjectCardLinkGithub | ProjectCardLinkUrl
    langs?: never
}
type ProjectCardMultiLang = {
    name: string
    description: string
    image?: string | IconSource
    lang?: never
    extra?: Array<ProjectCardExtraItem>
    link?: ProjectCardLinkGithub | ProjectCardLinkUrl
    langs?: string[]
}
export type ProjectCardProps = ProjectCardSingleLang | ProjectCardMultiLang
