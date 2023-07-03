const firebase = require('firebase-admin')
const {cert} = require("firebase-admin/app");
firebase.initializeApp({
    credential: cert({
        projectId: "capstone-test-api",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDCBrgQkeSPv89T\nLh9mwoYI9lWcCQr7LH2+e1Ac3KnDVyusYG8bVI9g+SDsSlY95MpgTZ+JYLBSUe78\nfQnJvBM3WQimEYexUaOsVWDvN1JF686ELy1Smlu9pjGMgv3PMi4qX990Q/8BDIFe\nhZIBBzOlSmlh0DECZTUES8vEqMvLYHtKMCgXHXwDUCBs3thrV+aMoNMxn5Is0mNS\nYbOSlPWX1V/3EBqIW5URtGigtt07Y0dhbLGP8u0unHYdpLhMVQWaQCSYufqLg8Np\n67Ds7o1NfzlztmDZue7VE9/4OFrhj1nuRvEvI2ZhdhuglOf5AeCLY0Xu20OVGJlk\n5GEBTy8TAgMBAAECggEAITAZB+yMlfIPOoEnKeKYHqxUFG6PjEsd7xkUqPstppYg\niEmud5RNOh8i/IfynH+oBjUA1vTM9CfDoziYFgOvncYC7rUM6s22G2I3RHPIBOHC\n32VacUip7JSi4Q/+7hP9RY5EoJSI59sFve9G/BoJQXqq7+o2l9xL50I3xpnA0jaQ\nSsnbWwtjezVVGGm4K6/WLuh3mo7b6Szds4ASik3dy/T06DWsnn+lBiXXfGrBrOLj\nytNbDCmTdgTC5+JybewhPWiePdMkaMrTQv3p9cuPv10HIM0sjy/cEjxoqSLBzc5B\nHlD/optonhjYa8Z9xpvLu6AP6IWXIkfckelfgp7AEQKBgQDp7zMPi1sO9ZWdoQot\nzyvg2zQh+uoFvIUCQfDRV9M7eecgVwkTCfiNIjbANbcYNMtM2oeA/AhIySbwJhBJ\nuMzVduBGdDH/BXduwcRyDVQqZuqrEStEEqyIgaKai4hEFgvgEJ4vo4gV4pCaSrIx\ndjatbtMh+R/LwMuwR20TF2iNnwKBgQDUU9w1KaLDInIcif8hJXdi8Py8GzQCAGJq\nJRcuFakbUG2oa06UqqNxCPT3JzbN2VF9KN97xHQJY8OamMbByPUMERAJ15XcpltY\nOTsu5PUyGavWpPIe6nxEKPSEMLtZVBN2p9pnfHcFjodznogD/mVit3JTidE3br7Y\nuTbH6GNCDQKBgE4/PSQI59dUG8xSzlXOQw3+JCztgZOToCXGKqfLKZNuTfnKQvXE\nUwfaFtgp32lQV2QIgGSLaLX32ndfM/mEv7bzAUdvnD2B9ZXtaCkB/lIEhJ/dqUwm\ntuEeA2aQH28utKAoztB+cYlodBe3vmy+7sEKHcLyUklT3o3DBl/pZ4ZfAoGAVBK4\nmRxZZGbZRE+oBBnvwe+mQ12KJFi+n0T8frT49uXL5epHfTpr6TAgv1R5sNyiFar/\nguRxBd7I7wgbe1P1I8gFz7/biTkd5jsTIihqpmHf1ugNLwyuE9cbqtQY+u/9nPgt\n1NhF0J91JuTY+qvavVHiJQ3nF8n0K6B6/oEX/GkCgYA1ZBr+d5adDEXeTrQsqls/\nDfvLM82RUk8RNMhGWrrTDE3qLtP4WQxl/QOkOmL1fpoDvd/e+lrERcLHL7F5+cnt\niVBPU2bJP55KIPV5Zx3COkr2wAMAwashLEUpCdrSfl+YNRUdsb3Tv3ujSRckcDbf\n3sI9HrrUGQR00sQdEYPVSA==\n-----END PRIVATE KEY-----\n",
        clientEmail: "firebase-adminsdk-s7f2m@capstone-test-api.iam.gserviceaccount.com"
    }),
    databaseURL: "https://capstone-test-api.firebaseio.com"
})

const db = firebase.firestore()

module.exports = db