import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserInfoProvider {
  public user: any = { }

  constructor(private storage: Storage, private events: Events) {
    console.log('Hello UserInfoProvider Provider')
    
    this.getUserData()
  }

  public getUserData() {
    const promises: Array<Promise<any>> = []

    Object.keys(this.user).forEach(key => {
      const promise = this.storage.get(key).then(data => this.setUserAttribute(key, data))
      promises.push(promise)
    })

    return Promise.all(promises)
      .then(() => this.events.publish('user:signin'))
      .catch(error => console.log('User not signedin:', error))
  }

  private setUserAttribute(key, data) {
    if(data) {
      this.user[key] = data
      return Promise.resolve()
    } else {
      return Promise.reject('Attribute not found')
    }
  }

  public saveUserData(user: any) {
    const promises: Array<Promise<any>> = []
    
    Object.keys(user).forEach(key => {
      const promise = this.storage.set(key, user[key])
      .then(() => {
        this.user[key] = user[key]
        return Promise.resolve()
      })

      promises.push(promise)
    })

    return Promise.all(promises)
  }

  public eraseUserData() {
    Object.keys(this.user).forEach(key => this.user[key] = null)
    return this.storage.clear().then(() => {
      this.events.publish('user:signout')
      return Promise.resolve()
    })
  }

}
