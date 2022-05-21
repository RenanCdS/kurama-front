export interface CreateContainerDto {
  image: string;
  externalPort: string;
  internalPort: string;
  environmentVariables: string[];
}
