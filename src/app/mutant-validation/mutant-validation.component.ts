import { Component } from '@angular/core';
@Component({
  selector: 'app-mutant-validation',
  templateUrl: './mutant-validation.component.html',
  styleUrls: ['./mutant-validation.component.scss']
})
export class MutantValidationComponent {
  dnaSequence = '';
  result: boolean | null = null;
  validateDNA() {
    const dnaArray = this.dnaSequence.split('\n').map(row => row.trim());
    this.result = isMutant(dnaArray);
  }
}
function isMutant(dna: string[]): boolean {
  const rowCount: number = dna.length;
  const colCount: number = dna[0].length;
  const isInvalidDNA = (row: number, col: number): boolean => {
    return (
      row < 0 || row >= rowCount || col < 0 || col >= colCount || dna[row][col] !== dna[0][0]
    );
  };
  const directions: number[][] = [
    [-1, 0], 
    [0, -1], 
    [-1, -1], 
    [-1, 1], 
  ];
  const checkSequence = (row: number, col: number, direction: number[]): boolean => {
    let count: number = 0;
    while (!isInvalidDNA(row, col)) {
      count++;
      if (count >= 4) {
        return true;
      }
      row += direction[0];
      col += direction[1];
    }
    return false;
  };
  for (let row: number = 0; row < rowCount; row++) {
    for (let col: number = 0; col < colCount; col++) {
      for (const direction of directions) {
        if (checkSequence(row, col, direction)) {
          return true;
        }
      }
    }
  }
  return false;
}