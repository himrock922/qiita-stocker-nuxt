import QiitaApi from '../../repositories/qiitaApi'
import { Api } from '../../domain/qiitaApiinterface'

export default class QiitaApiFactory {
  static create(): Api {
    return new QiitaApi()
  }
}
