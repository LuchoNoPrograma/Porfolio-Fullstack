import { defineStore } from "pinia";
import { ref } from "vue";
import { ProjectType } from "../types/DataType.ts";

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref<ProjectType[]>([]);
  const fetchProjects = async (url: string): Promise<ProjectType[]> => {
    return new Promise<ProjectType[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            projectId: 1,
            srcPortrait: "/Tienda/Swagger_Portrait.png",
            title: "Tienda Backend",
            description: `Desarrollé una aplicación Backend API REST, diseñada para cumplir con las reglas de negocio de un supermercado sencillo.
     Implementado con Swagger para generar una documentación clara y detallada.
     Además, incorporé un entorno de Test con JUnit mediante contenedores Docker.`,
            tag: "Backend",
            techs: [
              {
                name: "Java",
                use: "Utilizado como lenguaje principal para desarrollar la lógica de negocio.",
              },
              {
                name: "Spring Boot",
                use: "Framework seleccionado para la construcción ágil y eficiente de la API REST.",
              },
              {
                name: "PostgreSQL",
                use: "Empleado como sistema de gestión de bases de datos para el almacenamiento de datos relacionales.",
              },
              {
                name: "Docker",
                use: "Implementado como contenedor para las pruebas, permitiendo la creación de un entorno aislado y reproducible para el testing.",
              },
            ],
            srcImg: [
              "/Tienda/Swagger_1.png",
              "/Tienda/Swagger_2.png",
              "/Tienda/Swagger_3.png",
              "/Tienda/Swagger_4.png",
            ],
            linkRepository:
              "https://github.com/LuchoNoPrograma/spring_boot_vue_fullstack_app",
            linkWebsite: "",
            createdAt: new Date(2024, 0, 31),
          },
        ]);

        reject("Error caughting projects");
      }, 0);
    });
  };

  const getProjects = async () => {
    projects.value = await fetchProjects("/url");
    return projects.value;
  };

  const getProjectByProjectId = async (projectId: number) => {
    if (projects.value || projects.value.length === 0) {
      await getProjects();
    }
    return projects.value.find((project) => project.projectId === projectId);
  };

  return { projects, getProjects, getProjectByProjectId, fetchProjects };
});
