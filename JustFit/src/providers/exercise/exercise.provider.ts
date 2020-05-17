import { Injectable } from '@angular/core';
import { ExerciseHttpRepository } from '../../repositories/exercise/exercise.http.repository';

@Injectable()
export class ExerciseProvider {

  constructor(
    private readonly exerciseHttpRepository: ExerciseHttpRepository
  ) { }

  async retrieveExercises() {
    const response = await this.exerciseHttpRepository.retrieveExercises().toPromise();
    return response;
  }

}
