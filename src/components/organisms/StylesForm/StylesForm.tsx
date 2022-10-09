import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ChatIcon from '@mui/icons-material/Chat'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import { Field, FieldProps, Formik } from 'formik'
import React, { FC, useCallback, useContext } from 'react'
import ChatStylesContext from 'context/ChatStylesContext'
import AutoSave from 'components/atoms/AutoSave'
import ColorPicker from 'components/atoms/ColorPicker'
import Headline from 'components/atoms/Headline'
import ChatStyles from 'types/ChatStyles'

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
const StylesForm: FC = () => {
  const { chatStyles, setChatStyles } = useContext(ChatStylesContext)

  const handleSubmit = useCallback(
    (values: ChatStyles) => {
      if (typeof setChatStyles === 'function') setChatStyles(values)
    },
    [setChatStyles]
  )

  return (
    <Formik initialValues={chatStyles} onSubmit={handleSubmit}>
      <form action="/">
        <section>
          <Headline icon={<AccountCircleIcon />}>Avatars</Headline>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="avatar.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="Display"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="avatar.size">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.avatar.show}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<PersonIcon />}>Channel names</Headline>

          <Typography component="h3" gutterBottom variant="subtitle1">
            Owner
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="Display"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.fontSize">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.ownerName.show}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.ownerName.show}
                    value={form.values.ownerName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                Outline
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.outline.width">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.ownerName.show}
                    label="Thickness"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.ownerName.show}
                    value={form.values.ownerName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            Moderator
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="Display"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.fontSize">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.moderatorName.show}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.moderatorName.show}
                    value={form.values.moderatorName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                Outline
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.outline.width">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.moderatorName.show}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.moderatorName.show}
                    value={form.values.moderatorName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            Member
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="Display"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.fontSize">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.memberName.show}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.memberName.show}
                    value={form.values.memberName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                Outline
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              {' '}
              <Field name="memberName.outline.width">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.memberName.show}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.memberName.show}
                    value={form.values.memberName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            General user
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="Display"
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.fontSize">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.authorName.show}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.authorName.show}
                    value={form.values.authorName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                Outline
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.outline.width">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.authorName.show}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.authorName.show}
                    value={form.values.authorName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<ChatIcon />}>Message</Headline>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}></Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.fontSize">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker {...field} value={form.values.message.color} />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                Outline
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.outline.width">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    label="Size"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    value={form.values.message.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<SettingsIcon />}>Others</Headline>

          <FormGroup>
            <Field name="engagementMessage.show">
              {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  label="Show entry message"
                />
              )}
            </Field>
            <Field name="superChatBackground.show">
              {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  label="Show Superchat background"
                />
              )}
            </Field>
            <Field name="newMemberBackground.show">
              {({ field }: FieldProps<ChatStyles>): JSX.Element => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  htmlFor={field.name}
                  label="Show member registration announcement background"
                />
              )}
            </Field>
          </FormGroup>
        </section>

        <AutoSave />
      </form>
    </Formik>
  )
}
/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

export default StylesForm
