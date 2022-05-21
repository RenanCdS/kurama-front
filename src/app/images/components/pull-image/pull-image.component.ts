import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { PullImageDto } from '../../dtos/pull-image-dto';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-pull-image',
  templateUrl: './pull-image.component.html',
  styleUrls: ['./pull-image.component.scss']
})
export class PullImageComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
            private readonly dialog: MatDialog,
            private readonly imageService: ImageService,
            private readonly spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      imageName: this.formBuilder.control('', [Validators.required])
    });
  }

  cancel(): void {
    this.dialog.closeAll();
  }

  pullImage(): void {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }

    const pullImageDto: PullImageDto = {
      imageName: this.formGroup.get('imageName').value
    };

    this.spinnerService.openLoading();
    this.imageService.pullImage(pullImageDto).subscribe(() => {
      this.spinnerService.openLoading();
      window.location.reload();
    });
  }
}
