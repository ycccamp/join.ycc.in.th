import * as firebase from 'firebase'

export type Major = 'programming' | 'design'

export interface SubmissionFormData {
  firstname: string
  lastname: string
  nickname: string
  gender: string
  birthdate: string
  socialMedia: string
  religion: string
  class: string
  school: string
  address: string
  phone: string
  email: string
  shirtSize: string
  activity: string
  expectation: string
  bloodGroup: string

  parentFirstName: string
  parentLastName: string
  parentRelation: string
  parentPhone: string

  generalAnswer1: string
  majorAnswer1: string
  majorAnswer2: string
}

export interface CamperData extends SubmissionFormData {
  createdAt: firebase.firestore.Timestamp
  major: Major
  facebookDisplayName: string
  facebookEmail: string
  facebookPhotoURL: string
}
