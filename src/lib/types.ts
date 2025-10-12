import type { SvgComponent } from "astro/types"
import { langColors } from "@core/utils"

interface ProjectCardExtraItem {
    icon: string | SvgComponent & ImageMetadata
    value: string | number
}

export interface ProjectCardProps {
    name: string
    description: string
    lang?: keyof typeof langColors
    extra?: Array<ProjectCardExtraItem>
}
