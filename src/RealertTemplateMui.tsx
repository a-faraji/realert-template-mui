import './RealertTemplateMui.css';
import React, { FC, ReactNode } from 'react';
import { RealertTemplateProps } from '@a-faraji/realert';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from '@mui/material';

const RealertTemplateMui: FC<RealertTemplateMuiProps> = ({ title, okText = 'OK', content, icon, ...props }) => {
  const jsxContent = typeof content === 'string' ? <DialogContentText>{content}</DialogContentText> : content;

  return (
    <Dialog {...props}>
      {!!title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {!!icon ? (
          <div>
            <div className={'realert-template-mui-icon'}>{icon}</div>
            <div>{jsxContent}</div>
          </div>
        ) : (
          jsxContent
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>{okText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export type RealertTemplateMuiProps = RealertTemplateProps &
  Omit<DialogProps, 'children' | 'content' | 'onClose' | 'title'> & {
    icon?: ReactNode;
  };

export default RealertTemplateMui;
