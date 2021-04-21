import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import { DocsLink } from 'src/reusable'

const PostNamespace = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  React.icons = {...freeSet }

  return (
    <>
      
        <CCol xs="12" sm="4">
          <CCard>
            <CCardHeader>
              Create new namespace
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Name</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" id="name" name="name" autoComplete="cb-tb-ns-name"/>
                    <CInputGroupAppend>
                      <CInputGroupText><CIcon name="cil-text" /></CInputGroupText>
                    </CInputGroupAppend>
                  </CInputGroup>
                </CFormGroup>

                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Description</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" id="description" name="description" autoComplete="cb-tb-ns-description"/>
                    <CInputGroupAppend>
                      <CInputGroupText><CIcon name="cil-text" /></CInputGroupText>
                    </CInputGroupAppend>
                  </CInputGroup>
                </CFormGroup>
                
                <CFormGroup className="form-actions">
                  <CButton type="submit" size="sm" color="primary">Submit</CButton>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
        
    </>
  )
}

export default PostNamespace
