export interface AnalysisFormData {
  // Step 2 data
  name: string;
  phoneNumber: string;
  email: string;
  ssn: string;
  dateOfBirth: string;
  
  // Step 3 data
  governmentId: File | null;
  address: string;
  addressProof: File | null;
  
  // Step 4 data
  agreedToTerms: boolean;
  allowContact: boolean;
  initials: string;
  signature: string;
  
  // Final step
  smartCreditUsername: string;
  smartCreditPassword: string;
}

export type AnalysisStep = 1 | 2 | 3 | 4 | 5;
