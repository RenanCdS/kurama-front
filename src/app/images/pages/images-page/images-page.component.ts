import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { PullImageComponent } from '../../components/pull-image/pull-image.component';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.scss']
})
export class ImagesPageComponent implements OnInit {

  images: Image[] = [];
  constructor(
            private readonly dialog: MatDialog,
            private readonly imageService: ImageService,
            private readonly spinnerService: SpinnerService,
            private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.spinnerService.openLoading();
    this.imageService.getImages().subscribe(images => {
      this.images = images;
      this.spinnerService.closeLoading();
    }, () => this.spinnerService.closeLoading());
  }

  getImageName(image: Image): string {
    return image.repoTags.length !== 0 ? image.repoTags[0] : 'No Name';
  }

  deleteImage(imageId: string, imageName: string): void {
   this.dialog.open(ConfirmDialogComponent, {
      data: {
        title:`Tem certeza que deseja excluir a imagem ${imageName} ?`,
        positiveFunction: () => {
          this.spinnerService.openLoading();
          this.imageService.deleteImage(imageId).subscribe(() => {
            this.images = this.images.filter(container => container.id !== imageId);
            this.spinnerService.closeLoading();
            this.dialog.closeAll();
          }, () => {
            this.spinnerService.closeLoading();
            this.snackBar.open('Ocorreu algum erro ao deletar a imagem, por favor confirme se nenhum container está usando essa imagem',
             'Ok', { duration: 5000});
          });
        },
        negativeFunction: () => {this.dialog.closeAll();}
      }
    });
  }

  deleteAllImages(): void {
    this.dialog.open(ConfirmDialogComponent, {
        data: {
          title:`Tem certeza que deseja excluir todas as imagens ?`,
          positiveFunction: () => {
            this.spinnerService.openLoading();
            this.imageService.deleteAllImages().subscribe(() => {
                this.images = [];
                this.spinnerService.closeLoading();
                this.dialog.closeAll();
            }, () => {
              this.spinnerService.closeLoading();
              this.snackBar.open('Ocorreu algum erro ao deletar as imagens, por favor confirme se nenhum container está usando essa imagem',
              'Ok', { duration: 5000});
            });
          },
          negativeFunction: () => {this.dialog.closeAll();}
        }
      });
  }

  pullImage(): void {
    this.dialog.open(PullImageComponent);
  }
}
