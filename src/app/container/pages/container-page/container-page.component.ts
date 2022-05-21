import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { CreateContainerComponent } from '../../components/create-container/create-container.component';
import { Container } from '../../models/container';
import { ContainerService } from '../../services/container.service';

@Component({
  selector: 'app-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss']
})
export class ContainerPageComponent implements OnInit {

  containers: Container[] = [];
  constructor(
            private readonly dialog: MatDialog,
            private readonly spinnerService: SpinnerService,
            private readonly containerService: ContainerService) { }

  ngOnInit(): void {
    this.containerService.getContainers().subscribe(containers => {
      this.containers = containers;
    });
  }

  deleteAllContainers(title: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title,
        positiveFunction: () => {
          this.spinnerService.openLoading();
          this.containerService.deleteAllContainers().subscribe(() => {
            this.containers = [];
            this.spinnerService.closeLoading();
            this.dialog.closeAll();
          });
        },
        negativeFunction: () => {this.dialog.closeAll()}
      }
    });
  }

  deleteContainer(containerId: string, containerName: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title:`Tem certeza que deseja excluir o container ${containerName} ?`,
        positiveFunction: () => {
          this.spinnerService.openLoading();
          this.containerService.deleteContainer(containerId).subscribe(() => {
            this.containers = this.containers.filter(container => container.id !== containerId);
            this.spinnerService.closeLoading();
            this.dialog.closeAll();
          });
        },
        negativeFunction: () => {this.dialog.closeAll();}
      }
    });
  }

  createNewContainer(): void {
    this.dialog.open(CreateContainerComponent);
  }

  getContainerName(container: Container): string {
    return container.names.length !== 0 ? container.names[0].replace('/', '') : 'No name'
  }
}
