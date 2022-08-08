import gql from 'graphql-tag'

export const getAlbums = gql`
    query getAlbums{
        albums {
            id
            AlbumVolum
            albumArt
            albumTitle
            artist
            created_at
            owner
            realeaseDate
            trackCount
        }
    }
`

export const getTrack = gql`
    query getLyric{
        tracks {
                artist
                albumTitle
                albumVolume
                body
                owner
                id
                trackNumber
                trackTitle
                updated_at
                created_at
            }
    }  
`
export const getAlbumTracks = gql`
    {
        albums(where: {id: {_eq: "46dbf43e-1f8d-4bec-b397-5aae2f2e938c"}}) {
            id
            albumTitle
            trackCount
            artist
            owner
            realeaseDate
            albumArt
            tracks(order_by: {trackNumber: asc}) {
            id
            trackNumber
            trackTitle
            body
            created_at
            albumId
            updated_at
            }
        }
    }
`


