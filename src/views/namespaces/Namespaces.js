import React, { useState, useEffect } from 'react'
import { encode } from "base-64";
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton
} from '@coreui/react'

import namespacesData from './NamespacesData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Namespaces = () => {
    const history = useHistory()
    const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
    const [page, setPage] = useState(currentPage)
  
    const pageChange = newPage => {
      currentPage !== newPage && history.push(`/namespaces?page=${newPage}`)
    }
  
    useEffect(() => {
      currentPage !== page && setPage(currentPage)
    }, [currentPage, page])
  
    // https://betterprogramming.pub/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd
    const  [hasError, setErrors] =  useState(false);
    const  [namespaces, setNamespaces] = useState({});

    async function fetchData() {
        const res = await fetch("http://192.168.1.5:1323/tumblebug/ns", {
            method: 'GET',
            headers: new Headers({
              'Authorization': 'Basic ' + encode("default" + ":" + "default"),
              'Content-Type': 'application/json'
            }),
            // body: JSON.stringify({
            //   "PassengerMobile": "xxxxxxxxxxxx",
            //   "Password": "xxxxxxx"
            // })
          });
        res
          .json()
          .then(res => setNamespaces(res))
          .catch(err => setErrors(err));
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    return (
      <CRow>
        <CButton color="success" size="" block>Create new namespace</CButton>
        <CCol xl={6}>
          <CCard>
            <CCardHeader>
              Namespaces
              <small className="text-muted"> 
                
              </small>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              //items={namespacesData}
              items={namespaces.ns}
              fields={[
                { key: 'id', _classes: 'font-weight-bold' },
                'name', 'description'
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/namespaces/${item.id}`)}
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false} 
              align="center"
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }

export default Namespaces
