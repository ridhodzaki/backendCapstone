const crimeModel = require("../models/crime");
const response = require("../utils/response");
const moment = require("moment");

exports.inputCrime = data =>
  new Promise(async (resolve, reject) => {
    crimeModel
      .create(data)
      .then(() => resolve(response.commonSuccess))
      .catch(err => {
        console.log(err);
        reject(response.commonError);
      });
  });

exports.getCrimebyTanggal = tanggal =>
  new Promise(async (resolve, reject) => {
    crimeModel
      .findAll({
        where: {
          tanggalkejadian: tanggal
        }
      })
      .then(result => {
        resolve(response.commonResult(result));
      })
      .catch(err => {
        console.error(err);
        reject(response.commonError);
      });
  });

exports.getCrime = () =>
  new Promise(async (resolve, reject) => {
    crimeModel
      .findAll({})
      .then(result => {
        resolve(response.commonResult(result));
      })
      .catch(err => {
        console.error(err);
        reject(response.commonError);
      });
  });