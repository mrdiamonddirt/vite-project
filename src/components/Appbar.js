import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar
} from 'react95';
import styled from 'styled-components';


export function Default() {
  const [open, setOpen] = useState(false);

  return (

<AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
          onClick= {() => setOpen(!open)}
          active={open}
          style={{ fontWeight: 'bold' }}
          >
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: 'absolute',
                top: '0',
                top : '100%',
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>Programs</MenuListItem>
              <MenuListItem>Documents</MenuListItem>
              <Separator />
              <MenuListItem>Settings</MenuListItem>
              <MenuListItem>Find Files</MenuListItem>
              <MenuListItem>Run...</MenuListItem>
              <Separator />
              <MenuListItem>Shut Down...</MenuListItem>
            </MenuList>
          )}
        </div>
        <TextInput placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>

    );
    }