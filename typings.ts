import { API_REQUEST } from "./src/middleware/api";
import { GET_FORKS_REQUEST, GET_FORKS_ERROR, GET_FORKS_SUCCESS } from "./src/types"; 

export type Fork = {
    'full_name': string;
    owner: {
        login: string
    },
    'stargazers_count' : string
    'html_url': string
}



export type State = {
    isFetching: boolean;
    error: boolean;
    totalPages: number | null;
    list: Array<Fork> | null;
    ids: string[]
}



export type ActionLoading = {
    type:  typeof GET_FORKS_REQUEST,

}

export type ActionError = {
    type: typeof GET_FORKS_ERROR,
    payload: string
}

export type ActionSuccess = {
    type: typeof GET_FORKS_SUCCESS,
    payload:  {
        result: string[];
        totalPages: number | null
        forks: {
        entities: {
            recievedForks: Fork[]
        }
    }
}
}


export type Action = ActionLoading |  ActionError | ActionSuccess


export type ActionWithData = {
    type: typeof GET_FORKS_REQUEST | typeof GET_FORKS_ERROR | typeof GET_FORKS_SUCCESS
    payload?: ActionError['payload'] | ActionSuccess['payload']
}


export type CommonAction =  {
    [API_REQUEST]: {
        currentRep: string;
        currentPage: string
      }
}