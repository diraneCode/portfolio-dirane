"use client"

import { useState } from "react"
import { Grid3X3, List, LayoutGrid } from "lucide-react"
import { ProjectCardDetail } from "./ProjectCardDetail"
import { projectData } from "@/lib/projectData"


export function ProjectSection() {
  const [viewMode, setViewMode] = useState<"bento" | "vertical">("bento")
  const [mobileViewMode, setMobileViewMode] = useState<"vertical" | "horizontal">("vertical")

  return (
    <section
      id="projets"
      className="sm:py-20 min-h-screen w-full bg-[#0f172a] relative"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start mb-12">
          <h2
            className="text-start text-4xl font-bold text-white mb-14"
          >
            Mes <span className="text-blue-400">Projets</span>
          </h2>

          <div className="hidden md:flex bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20 mb-4 space-x-1">
            <button
              onClick={() => setViewMode("bento")}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${viewMode === "bento"
                ? "bg-blue-500 text-white shadow-lg"
                : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <LayoutGrid className="w-4 h-4" />
              Bento Grid
            </button>
            <button
              onClick={() => setViewMode("vertical")}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${viewMode === "vertical"
                ? "bg-blue-500 text-white shadow-lg"
                : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <Grid3X3 className="w-4 h-4" />
              Grille
            </button>
          </div>

          <div className="flex md:hidden bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
            <button
              onClick={() => setMobileViewMode("vertical")}
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${mobileViewMode === "vertical"
                ? "bg-blue-500 text-white shadow-lg"
                : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <List className="w-4 h-4" />
              <span className="text-sm">Vertical</span>
            </button>
            <button
              onClick={() => setMobileViewMode("horizontal")}
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${mobileViewMode === "horizontal"
                ? "bg-blue-500 text-white shadow-lg"
                : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <Grid3X3 className="w-4 h-4" />
              <span className="text-sm">2x2</span>
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          {viewMode === "bento" ? (
            <section className="max-w-6xl mx-auto">
              <div className="w-full h-full flex flex-col gap-6">
                <div className="flex justify-between space-x-4">
                  <div className="w-64 h-64">
                    <ProjectCardDetail
                      project={projectData[6]}
                      imageHeight="h-full"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[27rem] h-64">
                    <ProjectCardDetail
                      project={projectData[2]}
                      imageHeight="h-full"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-64 h-64">
                    <ProjectCardDetail
                      project={projectData[1]}
                      imageHeight="h-full"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-full h-96">
                    <ProjectCardDetail
                      project={projectData[3]}
                      imageHeight="h-full"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full h-96 space-y-4 flex flex-col">
                    <div className="w-full h-full">
                      <ProjectCardDetail
                        project={projectData[4]}
                        imageHeight="h-full"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="w-full h-full space-x-4 flex flex-row">
                      <div className="w-full h-full">
                        <ProjectCardDetail
                          project={projectData[0]}
                          imageHeight="h-full"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-full h-full">
                        <ProjectCardDetail
                          project={projectData[7]}
                          imageHeight="h-full"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          ) : (
            <div className="max-h-fit pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map((project, index) => (
                  <ProjectCardDetail key={index} project={project} imageHeight="h-64" />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="block md:hidden">
          {mobileViewMode === "vertical" ? (
            <div className="space-y-6">
              {projectData.map((project, index) => (
                <ProjectCardDetail key={index} project={project} imageHeight="h-56" className="w-full" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {projectData.map((project, index) => (
                <ProjectCardDetail key={index} project={project} imageHeight="h-40" className="w-full" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
