import React, { FC } from 'react';
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

const RealertTemplateMui: FC<RealertTemplateMuiProps> = ({ title, okText = 'OK', content, ...props }) => {
  return (
    <Dialog {...props}>
      {!!title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {typeof content === 'string' ? <DialogContentText>{content}</DialogContentText> : content}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>{okText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export type RealertTemplateMuiProps = RealertTemplateProps & Omit<DialogProps, 'children'>;

export default RealertTemplateMui;
