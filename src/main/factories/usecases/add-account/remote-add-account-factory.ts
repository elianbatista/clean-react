import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { AddAccount } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'

export const makeRemoteAddAccount = (): AddAccount => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
