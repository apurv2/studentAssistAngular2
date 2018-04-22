export const environment = {
  production: true,
  url: 'http://stud.us-east-1.elasticbeanstalk.com/',
  appId: '297115703779135',
  APARTMENT_NAME: "apartmentName",
  NO_OF_ROOMS: "noOfRooms",
  VACANCIES: "vacancies",
  COST: "cost",
  GENDER: "gender",
  FBID: "fbId",
  NOTES: "notes",
  USER_ID: "userId",
  POST_ACCOMODATION: "createAccommodationAddFromFacebook",
  POST_ACCOMMODATION_INDV: "createAccommodationAdd",
  ON_CAMPUS: "On-Campus",
  APARTMENT_TYPE: 'apartmentType',
  APARTMENT_NAME2: 'ApartmentName',
  GENDER_SPINNER: 'gender',
  MALE: "Male",
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  POST: "post",
  GET: "get",
  PUT: "put",
  ACCESS_TOKEN: "access_token",
  INVALID_REQUEST: "invalid request",
  GENDER_CODES: [{ code: "Male", description: "Male" },
  { code: "Female", description: "Female" },
  { code: "Doesnt Matter", description: "Doesnt Matter" },
  ],
  apartmentTypes: [{
    code: "on",
    description: "On-Campus"
  },
  {
    code: "off",
    description: "Off-Campus"
  },
  {
    code: "dorms",
    description: "Dorms"
  }],
  leftSpinnerValues: [{
    code: "apartmentType",
    description: "Apartment Type"
  },
  {
    code: "apartmentName",
    description: "Apartment Name"
  },
  {
    code: "gender",
    description: "Gender"
  }],
  getUniversityDetailsForUser: 'universities/getUniversityDetailsForUser',
  accessToken: 'accessToken',
  universityName: 'universityName',
  getFlashCards: 'getFlashCards',
  getSimpleSearchAdds: 'getSimpleSearchAdds',
  userSelectedUnivs: 'userSelectedUnivs',
  getAllApartmentsWithType: 'getAllApartmentsWithType',
  getAdvancedSearchAdds: 'getAdvancedSearchAdds',
  noOfRooms: [{ code: "	1 bhk/1 bath	", description: "	1 bhk/1 bath	" },
  { code: "1 bhk/2 bath", description: "1 bhk/2 bath" },
  { code: "2 bhk/1 bath", description: "2 bhk/1 bath" },
  { code: "2 bhk/2 bath", description: "2 bhk/2 bath" },
  { code: "3 bhk/1 bath", description: "3 bhk/1 bath" },
  { code: "3 bhk/2 bath", description: "3 bhk/2 bath" },
  { code: "3 bhk/3 bath", description: "3 bhk/3 bath" },
  { code: "Shared	", description: "Shared" },
  { code: "Other	", description: "Other" }],
  vacancies:
    [{ code: "1", description: "1" },
    { code: "2", description: "2" },
    { code: "3", description: "3" },
    { code: "4", description: "4" },
    { code: "Other", description: "Other" },
    { code: "Lease Transfer", description: "Lease Transfer" }],
  createUser: 'profile/createUser',
  connected: 'connected',
  getUserUniversities: 'profile/getUserUniversities',
  getNotificationSettings: 'profile/getNotificationSettings',
  subscribeNotifications: 'profile/subscribeNotifications',
  all: 'all',
  createAccommodationAdd: 'profile/createAccommodationAdd',
  cloudinaryURL: 'https://api.cloudinary.com/v1_1/duf1ntj7z/upload',
  CLOUDINARY_PRESET_VALUE: 'qdisf7f1',
  upload_preset: 'upload_preset',
  file: 'file',
  success: 'success',
  getUserPosts: 'profile/getUserPosts',
  login: 'Login',
  logout: 'Logout',
  deleteAccommodationAdd: 'deleteAccommodationAdd',
  addId: 'addId',
  branchUrl: 'https://api.branch.io/v1/url',
  branchKey: 'key_live_ljvA7ojt1BPcO0zpTFFdEimoqqhfGSXF',
  other: 'Other',
  addNewApartment: 'addNewApartment',
  apartmentTooltipText: "Add New Apartment",
  apartmentAlreadyAdded: "New Apartment Already Added",
  apartmentSuccess: "Apartment Added Successfully",
  getSimpleSearchAddsPagination: 'getSimpleSearchAddsPagination',
  landingTooltipText: 'Click to launch Search',
  landingEmptyTooltipText: 'Add Universities To Search',
  nonNativeURLs: ['cloudinary', 'branch'],
  setUserVisitedAdds: 'profile/setUserVisitedAdds',
  me: 'me',
  getAdminUserIds: 'profile/supUser',
  createAccommodationAddFromFacebook: 'profile/createAccommodationAddFromFacebook',
  getAccommodationFromAddId: 'getAccommodationFromAddId',
  noDataGif: '',
  getAccommodationNotifications: 'profile/getAccommodationNotifications',
  getRecentlyViewedAdds: 'profile/getRecentlyViewed',
  searchLearned: 'searchLearned'

};
