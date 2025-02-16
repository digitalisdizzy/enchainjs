/**
 * @callback Link
 * @param {any} data
 * @param {Chain} chain
 * @returns {any}
 */

/**
 * @property {Link[]} links
 * @property {Object} store
 * @property {number} index
 */
class Chain {
    /**
     * @param {Link[]} chain 
     */
    constructor(chain = []){
        this.links = chain
        this.store = {}
        return this
    }

    run(data, store){return new Promise(function(resolve, reject) {
        this.store = store || {}
        try {
            this.links.forEach(link => {
                data = link(data, this)
            });
        } catch(e){
            reject(e)
            return
        }
        resolve(data)
    }.bind(this))}
}

module.exports = Chain