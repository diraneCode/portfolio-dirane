import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink, Github, Calendar, User } from "lucide-react"
import { projectData } from "@/lib/projectData"


export const ProjectCardDetail = ({
    project,
    className = "",
    imageHeight = "h-48",
}: {
    project: (typeof projectData)[0]
    className?: string
    imageHeight?: string
}) => (
    <Sheet>
        <SheetTrigger asChild>
            <div
                className={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg group cursor-pointer relative transition-all duration-300 hover:shadow-2xl hover:bg-white/15 ${className}`}
            >
                <div className={`relative ${imageHeight}`}>
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="w-full h-full object-contain transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <h3 className="text-white font-bold text-lg mb-1 capitalize">{project.name}</h3>
                        <div className="flex flex-wrap gap-1 mt-2">
                            {project.tech.slice(0, 3).map((tech, index) => (
                                <span key={index} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SheetTrigger>
        <SheetContent
            side="bottom"
            className="max-h-[85vh] w-full md:w-[90vw] lg:w-[90vw] place-self-center sm:max-h-[90vh] rounded-t-3xl border-0 bg-white/95 backdrop-blur-xl shadow-2xl"
        >
            <div className="mx-auto max-w-4xl mt-10">
                <SheetHeader className="text-left pb-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Project Image */}
                        <div className="relative w-full sm:w-80 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-100 to-gray-200">
                            <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                            <div className="absolute top-4 right-4">
                                <Badge variant="secondary" className="bg-white/90 text-gray-800 font-medium">
                                    {project.category}
                                </Badge>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="flex-1 space-y-4">
                            <div>
                                <SheetTitle className="text-3xl sm:text-4xl font-bold text-gray-900 capitalize mb-2">
                                    {project.name}
                                </SheetTitle>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{project.year}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>Projet personnel</span>
                                    </div>
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-900">Technologies utilisées</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className="bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-900">Description</h4>
                                <SheetDescription className="text-gray-700 leading-relaxed text-base">
                                    {project.fullDescription}
                                </SheetDescription>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                {project.link && project.link !== "#" && (
                                    <Button
                                        asChild
                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Voir le projet
                                        </a>
                                    </Button>
                                )}
                                {project.github && (
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl px-6 py-3 font-medium transition-all duration-200 bg-transparent"
                                    >
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code source
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </SheetHeader>
            </div>
        </SheetContent>
    </Sheet>
)