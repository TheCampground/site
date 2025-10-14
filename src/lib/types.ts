import type { IconSource } from "@steeze-ui/svelte-icon"
import { langColors } from "@core/utils"

interface ProjectCardExtraItem {
    icon: IconSource
    value: string | number
}

export interface ProjectCardProps {
    name: string
    description: string
    image?: string
    lang?: keyof typeof langColors
    extra?: Array<ProjectCardExtraItem>
}
