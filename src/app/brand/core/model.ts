export interface Campain {
  requestId:           number;
  advice:              boolean;
  campaignName:        string;
  campaignDescription: string;
  decisionDeadline:    string | null;
  decisionDescription: string;
  key:                 string;
  numberOfAssets:      number;
  createdDate:         string;
  updatedDate:         string | null;
  submittedDate:       string | null;
  validatedDate:       string | null
  affiliate:           Affiliate;
  brand:               Brand;
  requestStatus:       RequestStatus;
  createdBy:           AtedBy;
  updatedBy:           AtedBy | null;
  submittedBy:         AtedBy | null;
  validatedBy:         AtedBy | null;
  countries:           Country[];
  media:               Media[];
}

export interface Affiliate {
  affiliateId: number;
  name:        string;
}

export interface Brand {
  brandId: number;
  name:    string;
}

export interface Country {
  countryId: number;
  name:      string;
  value:     string;
}

export interface AtedBy {
  userInfoId: number;
  name:       string;
  email:      string;
}

export interface Media {
  mediaId: number;
  name:    string;
  value:   string;
}

export interface RequestStatus {
  requestStatusId: number;
  name:            string;
  value:           string;
  step:            number;
}
