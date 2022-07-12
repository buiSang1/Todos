import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Apollo, gql } from 'apollo-angular';
import { USERS_DESCRIPTION } from 'app/graphql/graphql.user';
import { User } from 'app/models/inventory';

import { DialogComponent } from '../dialog/dialog.component';

const Get_getUserByUsername = gql`
  query ($USERNAME: String!) {
    getUserByUsername(username: $USERNAME) {
      _id
      email
      name
      password
      username
    }
  }
`;
const Get_findOneByKeyUserName = gql`
  query ($USERNAME: String!) {
    findOneByKeyUserName(username: $USERNAME) {
      _id
      email
      name
      password
      username
    }
  }
`;

const Delete_RemoveUser = gql`
  mutation ($idUser: String!) {
    RemoveUser(id: $idUser) {
      _id
      email
      name
      password
      username
    }
  }
`;

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  users: User[] = [];
  employee: any[] = [];
  loading = true;
  selectedUserName = '';

  names: string[] = [];
  constructor(private apollo: Apollo, private dialogService: NbDialogService) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: USERS_DESCRIPTION,
      })
      .valueChanges.subscribe((res: any) => {
        this.users = res?.data?.user;
        console.log('data User', res);
      });
  }

  SearchByUserName() {
    const data: any[] = [];

    this.apollo
      .watchQuery({
        query: Get_getUserByUsername,
        variables: {
          USERNAME: this.selectedUserName,
        },
      })
      .valueChanges.subscribe((res: any) => {
        this.users = [];
        this.users.push(res.data.getUserByUsername);
        console.log('search Username', this.users);
      });
  }

  SearchByUserNameKeyWord() {
    this.apollo
      .watchQuery({
        query: Get_findOneByKeyUserName,
        variables: {
          USERNAME: this.selectedUserName,
        },
      })
      .valueChanges.subscribe((res: any) => {
        this.users = res?.data?.findOneByKeyUserName;
      });
  }

  open() {
    this.dialogService
      .open(DialogComponent)
      .onClose.subscribe((name) => name && this.names.push(name));
  }

  RemoveUser(userid: string) {
    this.apollo
      .mutate({
        mutation: Delete_RemoveUser,
        variables: {
          idUser: userid,
        },
      })
      .subscribe((res: any) => {
        this.users = res.data.Delete_RemoveUser;
      });
    console.log('UserID', userid);
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }
}
