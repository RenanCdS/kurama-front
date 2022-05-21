import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { CreateContainerDto } from '../../dtos/create-container-dto';
import { ContainerService } from '../../services/container.service';

@Component({
  selector: 'app-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.scss']
})
export class CreateContainerComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
            private readonly spinnerService: SpinnerService,
            private readonly containerService: ContainerService,
            private readonly snackBar: MatSnackBar,
            private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      imageName: this.formBuilder.control('', [Validators.required]),
      internalPort: this.formBuilder.control('', [Validators.required]),
      externalPort: this.formBuilder.control('', [Validators.required]),
    });
  }

  createContainer(): void {
     if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }

    const createContainerDto: CreateContainerDto = {
      image: this.formGroup.get('imageName').value,
      externalPort: this.formGroup.get('externalPort').value,
      internalPort: this.formGroup.get('internalPort').value,
      environmentVariables: []
    };

    this.spinnerService.openLoading();
    this.containerService.createContainer(createContainerDto).subscribe(() => {
      window.location.reload();
    }, error => {
      this.spinnerService.closeLoading()
      this.snackBar.open('Ocorreu algum erro, por favor verifique se a imagem foi baixada e as portas', 'Ok', {duration: 5000})
    }, () => this.spinnerService.closeLoading());
  }

  cancel(): void {
    this.dialog.closeAll();
  }
}
